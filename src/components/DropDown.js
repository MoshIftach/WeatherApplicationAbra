import React from "react";
import Select from "react-select";
import TextField from '@mui/material/TextField';
import "../style/DropDown.css";
import {Button} from 'react-bootstrap'

export const Dropdown =(props)=> {
        return (
            /*<div className="basic-single col-4 m-4 mx-auto search-bar">
                <input
                    onChange={(texto)=> props.setSearchedItem(texto.target.value)}
                    placeholder={"Search a city..."}/>
                <Select
                    placeholder="Click to see options after typing search..."
                    isSearchable="false"
                    name="cities"
                    options={props.locations}
                    onChange={selectedOption =>
                        props.handleOnChange(selectedOption.label, selectedOption.code)
                    }
                />
            </div>*/
            <div className="search-container flex justify-center align-center center">
                <form autoComplete="off" className="Search-form-to-location">
                    <TextField value={props.searchedItem} className="TextField-to-search-location" label="Search for city..." name="location" onChange={(texto)=> props.setSearchedItem(texto.target.value)} />
                </form>
                <div className="Unmarked-list-to-search-location-result">
                    {props.locations.length>0 && props.locations.map(option => <Button variant="outline-primary" className="Li-to-search-location-result" key={option.code} onClick={() => props.handleOnChange(option.label,option.code)}>{option.label},{option.value} </Button>)}
                </div>
            </div>
        );
}

export default Dropdown;