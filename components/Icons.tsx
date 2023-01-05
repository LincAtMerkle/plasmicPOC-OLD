import {GolfIcon} from "./CustomIcons"

export function Icons({icon}:{icon:string}) {
    switch (icon) {
        case "Golf" :
            return <GolfIcon />;
        default: 
            return null;
        }
}

