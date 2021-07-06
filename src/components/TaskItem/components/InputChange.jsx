import { useState } from 'react';
import { Input, Button } from 'antd';

export default function InputChange({ title, setIsChange }) {

    const [changeTitle, setChangeTitle] = useState(title);

    return (
        <div>
            <Input
                value={changeTitle}
                onChange={e => setChangeTitle(e.target.value)}
            />
            <div className="row mt-2">
                <div className="col-auto">
                    <Button type="primary">Сохранить</Button>
                </div>
                <div className="col-auto">
                    <Button type="danger" onClick={() => setIsChange(false)}>Отменить</Button>
                </div>
            </div>
        </div>
    )
}
