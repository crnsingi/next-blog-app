import { ConnectDB } from "@/lib/config/db"

const { NextResponse } = require("next/server")

const LoadDB = async () => {
    await ConnectDB();

}

export async function GET(request){
    return NextResponse.json({msg:"API Working"})
}