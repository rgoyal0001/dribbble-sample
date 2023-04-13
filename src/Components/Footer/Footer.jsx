import { Link } from "@chakra-ui/react";
import React from "react";

export const Footer=()=>{
    return (
        <div className="footer">
            <div>
                <p>Contact Us</p>

            </div>
            <div>
                <p>For designers</p>
                <Link>Go Pro!</Link>
                <Link>Explore design work</Link>
                <Link>Design blog</Link>
                <Link>Overtime podcast</Link>
                <Link>Playoffs</Link>
                <Link>Weekly Warm-Up</Link>
            </div>
            <div>
                <p>Hire designers</p>
                <Link>Post a job opening</Link>
                <Link>Search for designers</Link>
            </div>
            <div>
                <p>Company</p>
                <Link></Link>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}