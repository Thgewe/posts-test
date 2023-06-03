import React, {useEffect, useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import {useAppDispatch} from "../hooks/redux";
import {fetchFilteredPostsRequest} from "../store/reducers/postsReducer";
import cl from './styles/searchFilter.module.css';

const SearchFilter = () => {

    const [value, setValue] = useState<string>('');
    const [sort, setSort] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const delay = setTimeout(() => {
            dispatch(fetchFilteredPostsRequest({
                newPage: 1,
                filter: value,
                sort: sort,
            }))
        }, 200)

        return () => {
            clearTimeout(delay);
        }
    }, [value, sort]);

    const clickHandler = () => {
        setValue('');
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <Form className={'mb-3'} onSubmit={submitHandler}>
            <Form.Label htmlFor={'search'}>Поиск по названию</Form.Label>
            <InputGroup className={'mb-2'}>
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
            <Form.Switch
                onChange={() => setSort(!sort)}
                label={'Сортировать по названию'}
            />
        </Form>
    );
};

export default SearchFilter;