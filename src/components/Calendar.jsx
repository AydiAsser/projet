import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function CalendarComponent() {
    const [datetime24h, setDateTime24h] = useState(new Date()); 

    

    // Define a function to check if a specific date should be disabled
 
        return (<div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="calendar-24h" className="font-bold block mb-2">
                    24h Format
                </label>
                <Calendar 
                    id="calendar-24h" 
                    value={datetime24h} 
                    onChange={(e) => 
                        {   e.value.setMinutes(0)
                            setDateTime24h(e.value)
                    }} 
                    showTime 
                    hourFormat="24" 
                    disabledDates={[new Date(2023, 7, 15),new Date(2023, 7, 16)]}
                    
                />
            </div>
        </div>
    )
 
}
