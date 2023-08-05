import React, {useState} from "react";
import Sources from "./components/Sources";

export default function CreateChatbot() {
  
    return (
        <div>
            <main id="skip">
                <section className="bg-white">
                    <div className=" max-w-7xl mx-auto py-10 sm:py-24 px-4 sm:px-6 lg:px-8">
                       <Sources/>
                    </div>
                </section>
            </main>
        </div>
    );
}
