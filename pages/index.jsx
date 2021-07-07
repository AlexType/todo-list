import React from "react";

export default function Home() {
    return (
        <div className="container">
            <h1 className="title-page mb-3">Главная</h1>
            <p><span className="logo">TodoList</span> - это небольшой сервис, который может отслеживать/редактировать поставленные задачи.</p>
            <p>Сервис не использует back-end часть для сохранения задач, вместо этого задачи сохраняются в localStorage вашего браузера.</p>
        </div>
    );
}
