import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MoneyIcon from '@mui/icons-material/Money';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import GroupsIcon from '@mui/icons-material/Groups';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import BadgeIcon from '@mui/icons-material/Badge';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import BookIcon from '@mui/icons-material/Book';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import CollectionsIcon from '@mui/icons-material/Collections';

export const nav = [
    {to:"dashboard", title: "Dashboard", pic: <DashboardIcon />},
    {to:"learn-with-mentor", title: "Learn With Mentor", pic: <LocalLibraryIcon />},
    {title: "Learn on My Own", pic: <AutoStoriesIcon />,
        submenu:[
            {to: "my-videos", title: "My Videos"},
            {to: "my-games", title: "My Games"},
        ]
    },
    {to: "session", title: "Session", pic: <AssignmentIcon />},
    {to: "child-profile", title: "Child Profile", pic: <AssignmentIndIcon />},
    {to: "fees", title: "Fees", pic: <MoneyIcon />},
    {title: "Notification", pic: <NotificationsIcon />,
        submenu:[
            {to: "notice-from-teacher", title: "Notice from Teacher"},
            {to: "notice-from-admin", title: "Notice from Admin"},
            {to: "discussion-board", title: "Discussion Board"},
            {to: "kit-status", title: "Kit Status"},
        ]
    },
    {to: "calender", title: "Calender", pic: <InsertInvitationIcon />},
    {to: "meetings", title: "Meetings", pic: <GroupsIcon />},
    {to: "students-details", title: "Student's Details", pic: <EscalatorWarningIcon />},
    {title: "Assessments", pic: <AssessmentIcon />,
        submenu:[
            {to: "practice-at-home", title: "Practice at Home"},
            {to: "term-1", title: "Term 1"},
            {to: "term-2", title: "Term 2"}
        ]
    },
    {to: "development-card", title: "Development Card", pic: <DeveloperBoardIcon />},
    {to: "attendance", title: "Attendance", pic: <BadgeIcon />},
    {to: "students-activities-record", title: "Student's Activities Record", pic: <LocalActivityIcon />},
    {to: "blogs", title: "Blogs", pic: <BookIcon />},
    {to: "holiday-list", title: "Holiday List", pic: <HolidayVillageIcon />},
    {to: "gallery", title: "Gallery", pic: <CollectionsIcon />},
]