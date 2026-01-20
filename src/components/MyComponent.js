// class component
// function component

import React from 'react';
class MyComponent extends React.Component {

    state = {
        name: 'Eric',
        address: 'Hoi Dan IT',
        age: 26
    };
    // Quy định nội dung mà Component sẽ hiển thị lên UI
    // JSX: JavaScript XML
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent; // Để có thể sử dụng được Component này ở file khác thì ta cần export nó ra