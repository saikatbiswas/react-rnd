import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import AddRoadIcon from '@mui/icons-material/AddRoad';

export const nav = [
    {to:"home", title: "My Home", pic: <HomeIcon />},
    {to:"dashboard", title: "Dashboard", pic: <DashboardIcon />},
    {title: "Service Ticket", pic: <ConfirmationNumberIcon />,
        submenu:[
            {to: "session", title: "Session"},
            {to: "project-managements", title: "Software Tickets"},
            {to: "connect-wise-widget-details2", title: "Support Tickets2"},
            {to: "project-managements2", title: "Software Tickets2"},
            {to: "connect-wise-widget-details3", title: "Support Tickets3"},
            {to: "project-managements3", title: "Software Tickets3"},
            {to: "connect-wise-widget-details4", title: "Support Tickets4"},
            {to: "project-managements4", title: "Software Tickets4"},
            {to: "connect-wise-widget-details5", title: "Support Tickets5"},
            {to: "project-managements5", title: "Software Tickets5"},
        ]
    },
    {title: "Security Center", pic: <SecurityIcon />,
        submenu:[
            {to: "meraki-security-summary", title: "Firewall"},
            {to: "security", title: "Antivirus"},
            {to: "meraki-security-summary2", title: "Firewall2"},
        ]
    },
    {title: "Hardware/Software", pic: <StorageIcon />,
        submenu:[
            {to: "assets", title: "Assets"},
            {to: "group-backups", title: "Backup Status"}
        ]
    },
    {title: "Roadmaps", pic: <AddRoadIcon />, to: "roadmaps"},
]