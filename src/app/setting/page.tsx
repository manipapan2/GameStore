import Button from "@/Components/UI/Button";
import Title from "@/Components/UI/Title";
import { Box, Typography } from "@mui/material"
import { FC, ReactNode } from "react";
import { IoMdNotifications } from "react-icons/io";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";



const Setting: React.FC = () => {
    return (
        <Box>
            <Title Text="Permisions"/>

            <Box >
                <SettingOption IsActive={true} Icon={<IoMdNotifications size={30}/>} Text={'Notification'}/>
                <SettingOption IsActive={true} Icon={<BsCameraVideoFill size={30}/>} Text={'Camera'}/>
                <SettingOption IsActive={true} Icon={<FaLocationDot size={30}/>} Text={'Location'}/>
            </Box>
        </Box>
    )
}

interface SettingOptionProps {
    Icon: ReactNode,
    Text: string;
    IsActive: boolean;
    onClick?: (e: Event) => any;
}

export const SettingOption = ({Icon, Text, IsActive, onClick}: SettingOptionProps) => {
    return (
        <Box className="flex odd:bg-gray-800 bg-slate-900 p-3 rounded-md items-center justify-between">
            <Box className="flex">
                <i className="mr-3" style={{
                color: IsActive ? "var(--color-primary)" : "gray"
            }}>{Icon}</i>
            <Typography className="text-white">{Text} {IsActive ? "is active" : "is not active"}</Typography>
            </Box>

            <Box>
                <Button className="p-3 pt-2 pb-2 min-w-52 min-h-[auto]">{IsActive ? "Disable" : "Enable"} {Text}</Button>
            </Box>
        </Box>
    )
}


export default Setting