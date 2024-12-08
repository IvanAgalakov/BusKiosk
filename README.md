# Calgary Transit Bus Kiosk

## Description
This is a mock Calgary Transit Bus Kiosk, made for the course CPSC 481. It aims to show what an improved interface for the calgary transit buses would look like.
There are some parts of the design that emulate parts that would be present on the real kiosk, such as the _Pay_ button, simulating an actual payment occuring.

## Setup
To setup this repository you need to do the following.

Download Deno:
https://docs.deno.com/runtime/

Once downloaded in the BusKiosk directory run:<br/>
`deno install`

This will install all needed dependencies.<br/><br/>
Afterwards run:<br/>
`deno run dev` (to view it in development mode)<br/>
<br/>
Or<br/>
<br/>
`deno run build` (to build it for production)<br/>
`deno run start` (to start the production build)<br/>
<br/>
You can use pm2 or something similar to keep the process alive on a server.<br/>

### Use of Public Data
To use the **Bus Routes** screen, you'll need to download the Calgary Transit dataset that it uses.<br/>
<br/>
You will need to download it from here:<br/>
https://data.calgary.ca/Transportation-Transit/Calgary-Transit-Scheduling-Data/npk7-z3bj/about_data<br/>
<br/>
and then unzip it into your project directory, so that the folder structure looks like this:
```
BusKiosk
├── app
├── CT_GTFS
├── node_modules
└── public
```
On the first data fetch it will take about 7 seconds for the bus data to appear, on following runs it is instant as it it cached on the server.<br/>
<br/>
If you want to mess with the station that it is fetching around go to:<br/>
`pages/BusRoutes/page.tsx`

and change this line at the top:<br/>
`const { originLat, originLon } = { originLat: 51.04051616148598, originLon: -114.13558790242007 };`

To the latitude and longitude of your station. You can do this by right-clicking in google maps on the station in question:<br/>
![image](https://github.com/user-attachments/assets/68521a1c-8243-4df3-b3d5-bf844b25a2e4)
<br/>_^ An example of getting coordinates of Dalhousie Station in Calgary_

Of course this only works for locations in Calgary.
