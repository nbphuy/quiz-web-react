// class component
// function component

import React from 'react';
class MyComponent extends React.Component {
    // Quy định nội dung mà Component sẽ hiển thị lên UI
    // JSX: JavaScript XML
    render() {
        return (
            <div>
                My first component

                {Math.random()}
            </div>
        );
    }
}

export default MyComponent; // Để có thể sử dụng được Component này ở file khác thì ta cần export nó ra