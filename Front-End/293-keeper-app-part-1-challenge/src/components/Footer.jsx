import React from 'react';

const date = new Date();
const year = date.getFullYear();

export function Footer() {
    return (
        <footer>
            <p>Copyright &copy; Keeper App {year}</p>
        </footer>
    );
}