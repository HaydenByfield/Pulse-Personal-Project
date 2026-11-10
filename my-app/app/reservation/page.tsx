"use client";

import { useState } from "react"
export default function signUp() {
  // Creates a variable called rememberMe that orginal-state being unchecked is viewed as false
  const [terms_agreements, setTerms_Agreements] = useState(false)
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState<number>(2);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReservation(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          date,
          time,
          guest,
          firstname,
          lastname,
          phone,
          email,
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setSuccess(data.message);

      // Clear the form
      setDate("");
      setTime("");
      setGuest(2);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");

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
      <div className=" flex-1 grid justify-center grid-rows-[auto_auto_auto_auto] text-fourth p-2 ">
        <h2 id="greetings" className="text-third text-3xl  sm:text-4xl md:text-5xl lg:text-6xl ml-[-10] font-serif font-bold italic">Reservation</h2>
        <h2 id="greetings" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-[-10] font-serif font-bold italic">A Table Just For You</h2>
        <p className="text-lg font-serif">Choose your moment. We'll take care of the rest </p>
        <form onSubmit={handleReservation} id="login-UI" className=" flex-1 grid grid-rows-[40px_2fr_30px_auto_auto] gap-3 min-w-0 max-w-150 w-full">

          <h2 id="login-title" className=" grid items-center text-xl sm:text-2xl md:text-3xl lg:4xl text-third font-bold font-serif">Your Evening</h2>
          <div id="login-input" className="grid font-cinzel italic items-center grid-rows-[auto_auto_auto_auto_auto] grid-cols-[1fr_1fr] gap-4 text-lg">
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className=" flex-1 row-start-1 col-span-2 min-w-0 h-[50px] text-black bg-white h-4/8 " />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="flex-1 row-start-2 col-start-1 min-w-0 h-[50px] text-black bg-white h-4/8" />
            <select value={guest} onChange={(e) => setGuest(Number(e.target.value))} className="flex-1 row-start-2 col-start-2 min-w-0 h-[50px] text-black bg-white  h-4/8 " >
              <option value="1">1 Guest</option>
              <option value="2">2 Guest</option>
              <option value="3">3 Guest</option>
              <option value="4">4 Guest</option>
              <option value="5">5 Guest</option>
              <option value="6">6 Guest</option>
              <option value="7">7 Guest</option>
              <option value="8">8 Guest</option>
            </select>
            <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder=" first name" className="flex-1 min-w-0 h-[50px] row-start-3 col-start-1 text-black bg-white h-4/8 " />
            <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder=" last name" className="flex-1 min-w-0 h-[50px] row-start-3 col-start-2 text-black bg-white h-4/8 " />
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder=" mobile number" className="flex-1 min-w-0 h-[50px] row-start-4 col-span-2 text-black bg-white h-4/8 " />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" email address" className="flex-1 min-w-0 h-[50px] row-start-5 col-span-2 text-black bg-white  h-4/8 " />
          </div>
          <div id="login-save" className="flex items-center gap-2">
            <input className="  w-5 h-5" type="checkbox" id="remember" checked={terms_agreements} onChange={(e) => setTerms_Agreements(e.target.checked)} />
            <label htmlFor="terms_agreements" className=" font-serif  text-sm sm:text-md">I agree to Terms of Use and acknowledge the privacy policy</label>
          </div>
          <hr />
          <div id="login-save" className="flex items-center gap-2">
            <input className="  w-5 h-5" type="checkbox" id="remember" checked={terms_agreements} onChange={(e) => setTerms_Agreements(e.target.checked)} />
            <label htmlFor="terms_agreements" className=" font-serif text-sm sm:text-md">Save these dinning preferences to my guest profile for future visits</label>
          </div>
          {error && (
            <p className="text-red-500">{error}</p>
          )}
          {success && (
            <p className="text-green-600">{success}</p>
          )}

          <button type="submit" disabled={loading} className="font-cinzel border-2 p-0 sm:p-6 bg-second hover:shadow-[5px_5px_10px_black] cursor-pointer">{loading ? "Submitting" : "Confirm my reservation"}</button>

        </form>
      </div>
      <div></div>
    </div>


  );
}