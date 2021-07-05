import { Form, FormControl, Navbar, Nav, Button } from "react-bootstrap";
import Link from 'next/link'

export default function Header() {
    return (
        <Navbar bg="light" variant="light">
            <div className="container">
                <div className="row justify-content-center justify-content-md-between w-100">
                    <div className="col-auto d-flex align-items-center">
                        <Navbar.Brand>TodoList</Navbar.Brand>
                        <Nav className='ml-4'>
                            <Link href="/">
                                <a className="link link_gray">Главная</a>
                            </Link>
                            <Link href="/all-tasks">
                                <a className="link link_gray mx-3">Задачи</a>
                            </Link>
                            <Link href="/add-task">
                                <a className="link link_gray">Добавить</a>
                            </Link>
                        </Nav>
                    </div>
                    <div className="col-auto d-none d-sm-block mt-2 mt-md-0">
                        <Form inline>
                            <FormControl type="text" placeholder="Найти задачу" className="mr-sm-2" />
                            <Button variant="outline-primary">Поиск</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}