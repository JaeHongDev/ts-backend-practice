
import * as fs from "fs";


import { Singleton } from "tstl/thread/Singleton";
import { randint } from "tstl/algorithm/random";

const directory = new Singleton(async () =>
{
    await mkdir(`${__dirname}/../../assets`); 
    await mkdir(`${__dirname}/../../assets/logs`); 
    await mkdir(`${__dirname}/../../assets/logs/errors`); 
});

async function mkdir(path: string): Promise<void>
{
    try 
    {
        await fs.promises.mkdir(path); 
    }
    catch {}
}
