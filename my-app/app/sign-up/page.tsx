"use client";
import { useRouter } from "next/navigation"
import { useState } from "react"
export default function signUp() {
  // Creates a variable called rememberMe that orginal-state being unchecked is viewed as false
  const [terms_agreements, setTerms_Agreements] = useState(false)
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      // Automatically sign in after registration
      localStorage.setItem(
        "lemont_user",
        JSON.stringify(data.user)
      );

      window.dispatchEvent(new Event("auth-change"));

      router.push("/");

    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return (

    <div id="background" className=" flex w-full min-w-0  justify-between items-start 
                  h-screen bg-fifth  gap-4">
      <div className=" hidden md:block absolute z-1  md:bottom-[20] md:left-3 lg:bottom-[55] xl:bottom-[20]  lg:left-5 text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-white font-script">Le-Monte</div>
      <div className=" hidden md:block absolute z-1  md:bottom-[-50] md:left-3 lg:bottom-[-50] lg:left-5 text-md sm:text-lg md:text-xl lg:text-3xl text-white w-[120px] sm:w-[190px] md:w-[400px] lg:w-[430px] xl:w-[630px] font-serif">Warmest of welcomes. To our new guest. Its is our greastest pleasure to have you on board</div>
      <div className=" hidden md:block w-1/2 h-screen bg-black">
        <img src="/images/italian-background2.jpg" className=" hidden md:block relative z-0 w-full h-full min-h-full object-cover opacity-50" />
      </div>
      <div className=" flex-1 grid justify-center grid-rows-[auto_auto_auto] text-fourth p-6">
        <h1 id="greetings" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl ml-[-10] font-serif font-bold italic">Be Our Guest</h1>
        <p className="text-md font-serif">Join our family and experience our first-class italian cusine. </p>
        <form onSubmit={handleSignup} id="login-UI" className=" flex-1 grid grid-rows-[50px_2fr_50px_auto_auto] gap-3 min-w-0 max-w-150 w-full">

          <h2 id="login-title" className=" grid items-center text-xl sm:text-2xl md:text-3xl lg:4xl  font-bold font-serif">Sign Up</h2>
          <div id="login-input" className="grid font-cinzel italic items-center grid-rows-[auto_auto_auto_auto_auto] grid-cols-[1fr_1fr] gap-4 text-lg">
            <p className=" row-start-1 col-span-2 text-justify italic font-serif text-lg ">The finest french cusine since 1964. Experience handcrafted authenctic italian recipes, with rich flavors made from fresh ingredients.</p>
            <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="flex-1 row-start-2 col-start-1 min-w-0 h-[50px] text-black bg-white h-4/8" required />
            <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="flex-1 row-start-2 col-start-2 min-w-0 h-[50px] text-black bg-white  h-4/8 " required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 min-w-0 h-[50px] row-start-3 col-span-2 text-black bg-white h-4/8 " required />
            <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="flex-1 min-w-0 h-[50px] row-start-4 col-span-2 text-black bg-white h-4/8 " required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} maxLength={72} className="flex-1 min-w-0 h-[50px] row-start-5 col-span-2 text-black bg-white  h-4/8 " required />
          </div>
          <div id="login-save" className="flex items-center gap-2">
            <input className="  w-5 h-5" type="checkbox" id="remember" checked={terms_agreements} onChange={(e) => setTerms_Agreements(e.target.checked)} />
            <label htmlFor="remember" className=" font-serif text-md">I agree to Terms of Use and acknowledge the privacy policy</label>
          </div>
          {error && (<p className="text-red-500">{error}</p>)}
          <button type="submit" disabled={loading} className="font-cinzel border-2 p-2 sm:p-6 bg-second hover:shadow-[5px_5px_10px_black] cursor-pointer">{loading ? "Creating Account..." : "Sign Up"}</button>
          <div className=" flex justify-center font-serif gap-1 text-md">
            <p>Already a guest?</p>
            <a href="/login" className="  relative cursor-pointer underline text-blue-500 hover:opacity-50">Sign in</a>
          </div>

        </form>

      </div>
    </div >


  );
}