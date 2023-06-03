import React, {useEffect, useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import {useAppDispatch} from "../hooks/redux";
import {fetchFilteredPostsRequest} from "../store/reducers/postsReducer";
import cl from './styles/searchFilter.module.css';

const SearchFilter = () => {

    const [value, setValue] = useState<string>('');

    const dispatch = useAppDispatch();

    useEffect(() => {
        const delay = setTimeout(() => {
            dispatch(fetchFilteredPostsRequest({
                newPage: 1,
                filter: value,
            }))
        }, 200)

        return () => {
            clearTimeout(delay);
        }
    }, [value]);

    const clickHandler = () => {
        setValue('');
    }

    return (
        <div className={'mb-3'}>
            <Form.Label htmlFor={'search'}>Поиск по названию</Form.Label>
            <InputGroup>
                <Form.Control
                    value={value}
                    onInput={(e) => setValue(e.currentTarget.value)}
                    type={'text'}
                    id={'search'}
                />
                <Button
                    variant={'light'}
                    className={cl.button + ' border-start-0'}
                    onClick={clickHandler}
                >
                    ✖
                </Button>
            </InputGroup>
        </div>
    );
};

export default SearchFilter;