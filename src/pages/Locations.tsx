import Location from "../components/Location.tsx";

const Locations = () => {
    return (
        <div className="locations">
            <Location x={43.64415796571394} y={-79.39393798835007} title={"Canada"} address={{title: "Designo Central Office", address: "3886 Wellington Street Toronto, Ontario M9C 3J5", addressSrc: "https://www.google.com/maps/dir//Wellington+St+W,+Toronto,+ON,+Canada/@43.6440066,-79.3971137,607m/data=!3m1!1e3!4m18!1m8!3m7!1s0x882b34d9a0737d9f:0xbc1ae74f23fabf4e!2sWellington+St+W,+Toronto,+ON,+Canada!3b1!8m2!3d43.6440066!4d-79.3945388!16s%2Fg%2F1vnrr797!4m8!1m0!1m5!1m1!1s0x882b34d9a0737d9f:0xbc1ae74f23fabf4e!2m2!1d-79.3945388!2d43.6440066!3e3?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D"}} email={"contact@designo.co"} phone={{phone: "+1 253-863-8967",phoneSrc: "+12538638967"}} />
            <Location x={-30.329246895883404} y={149.78816360971075} title={"Australia"} address={{title: "Designo AU Office", address: "19 Balonne Street New South Wales 2443", addressSrc: "https://www.google.com/maps/dir//19+Balonne+St,+Narrabri+NSW+2390,+Australia/@-30.3294275,149.7856209,724m/data=!3m1!1e3!4m18!1m8!3m7!1s0x6ba73450a680702d:0x44a309bd6607346e!2s19+Balonne+St,+Narrabri+NSW+2390,+Australia!3b1!8m2!3d-30.3294275!4d149.7881958!16s%2Fg%2F11crqw06vv!4m8!1m0!1m5!1m1!1s0x6ba73450a680702d:0x44a309bd6607346e!2m2!1d149.7881958!2d-30.3294275!3e3?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D"}} email={"contact@designo.au"} phone={{phone: "(02) 6720 9092",phoneSrc: "0267209092"}} />
            <Location x={51.73180285574043} y={-3.8626009857892516} title={"United Kingdom"} address={{title: "Designo UK Office", address: "13  Colorado Way Rhyd-y-fro SA8 9GA5", addressSrc: "https://www.google.com/maps/dir//51.7318154,-3.8626077/@51.7317874,-3.8628739,51m/data=!3m1!1e3!4m2!4m1!3e3?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D"}} email={"contact@designo.uk"} phone={{phone: "078 3115 1400",phoneSrc: " 07831151400"}} />
        </div>
    );
};

export default Locations;