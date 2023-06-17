import { ButtonHTMLAttributes, MouseEventHandler } from "react"


export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    textStyles?:string;
    rightIcon?:string;
    handleClick:MouseEventHandler<HTMLButtonElement>
    btnType?:"button"|"submit";
    isDisabled?:boolean;
}
export interface optionProps{
    title:string
    value:string
}
export interface CustomFilterProps{
    title:string;
    options:optionProps[]
}
export interface SearchManufactureProps{
    manufacturer:string;
    setManufacturer:(manufacture:string)=>void;
}
export interface CarProps{
    city_mpg:number;
    class: string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}
export interface FilterProps{
    manufacturer:string
    year:number
    fuel:string
    limit:number
    model:string
}
export interface HomeProps {
    searchParams: FilterProps;
  }
export interface ShowMoreProps{
    pageNumber:number
    isNext:boolean
}
