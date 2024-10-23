import { ConnectDB } from "@/lib/config/db"
import { write } from "fs";
const { NextResponse } = require("next/server")
import {writeFile} from 'fs/promises'

const LoadDB = async () => {
    await ConnectDB();

}

LoadDB();

export async function GET(request){
    return NextResponse.json({msg:"API Working"})
}

export async function POST(request){

    const formData =  await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgURL = `/${timestamp}_${image.name}`;
}