import React from "react";

export default function App () {
    return (
        <div className="min-h-screen flex flex-col text-white">
            <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                <h2 className=" md:text-3xl lg:text-4xl uppercase">Welcome to</h2>
                <h1 className="text-2xl md:text-4xl lg:text-6xl uppercase font-black mb-8">The Coding Club</h1>
                <div className="text-lg py-2 px4 md:text-2xl md:py-4 md:px-10 lg:text-3xl lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
                    947,459 members
                </div>
                <form action="https://www.getrevue.co/profile/gagangomu/add_subscriber" 
                method="post" 
                target="_blank">
  <div className="flex flex-col md:flex-row justify-center mb-4 revue-form-group">
    <input className=" outline-none mb-2 text-2xl placeholder:text-gray-400 placeholder:italic py-2 px-4 bg-white bg-opacity-10 focus:bg-opacity-20 dutation-150 rounded-full " 
    placeholder="Emily@example.com" 
    type="email" 
    name="member[email]" />
    <input className="bg-primary rounded-full py-2 px-6 cursor:pointer hover:opacity-90 duration-150 " 
     type="submit" 
    value=" Join today" 
    name="member[subscribe]"/>
  </div>
  <div className=" opacity-75 italic revue-form-footer">
    By subscribing, you agree with Revue’s 
    <a className="hover:opacity-80 duration-150" target="_blank" href="https://www.getrevue.co/terms" >Terms of Service</a> 
    and 
    <a className="hover:opacity-80 duration-150" target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.
    </div>
  </form>

            </main>
            <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
                <p>Build with 💖 by Gagan</p>
                <div className="flex -mx-6">
                    <a href="#" className="mx-3 hover:opacity-80 duration-150">About Us</a> |
                    <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> |
                    <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
                </div>

            </footer>
        </div>


    );
};
