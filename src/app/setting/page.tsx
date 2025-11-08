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

            <Box className="bg-[var(--color-accent)] rounded-sm">
                <SettingOption IsActive={true} Icon={<IoMdNotifications size={30}/>} Text={'Notification'}/>
                <SettingOption IsActive={false} Icon={<BsCameraVideoFill size={30}/>} Text={'Camera'}/>
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
        <Box className="flex border-[1px] border-r-0 border-l-0 border-t-0 last:border-b-0 border-solid border-slate-500 p-3 items-center justify-between flex-col md:flex-row">
            <Box className="flex justify-start w-full md:w-auto items-center md:justify-normal">
                <i className="mr-3" style={{
                color: IsActive ? "var(--color-primary)" : "gray"
            }}>{Icon}</i>
            <Typography className="text-white">{Text} {IsActive ? "is active" : "is not active"}</Typography>
            </Box>

            <Box className="w-full md:w-auto">
                <Button className={`p-3 pt-2 pb-2 w-full mt-4 md:mt-0 min-w-52 ${IsActive && 'bg-red-600 text-white'} min-h-[auto]`}>{IsActive ? "Disable" : "Enable"} {Text}</Button>
            </Box>
        </Box>
    )
}


export default Setting