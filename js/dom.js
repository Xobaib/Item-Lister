const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form Submit Event:
form.addEventListener('submit', addItem);

// Delete event:
itemList.addEventListener('click', removeItem);

// Filter event:
filter.addEventListener('keyup', filterItems);

// Add item:
function addItem(e){
    e.preventDefault();
    
    // Get input value:
    const newItem = document.getElementById('item');

    // Create new li element:
    const li = document.createElement('li');
    
    // Add class:
    li.className = 'list-group-item';
    
    // Add textnode with input value:
    const text = document.createTextNode(`${newItem.value}`);
    li.appendChild(text);

    // Create del button element:
    const button = document.createElement('button');

    // Add classes to del button:
    button.className = 'btn btn-danger btn-sm float-right delete';

    // Add text to del button:
    button.textContent = 'X';

    // Append button to li:
    li.appendChild(button);
    
    // Append li to itemList:
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete'))/*NEW*/{
        if(confirm('Are You Sure?'))/*NEW*/{
            const li = e.target.parentElement;
            itemList.removeChild(li)/*NEW*/;
        };
    };
};

// Filter items:
function filterItems(e){
    // convert text to lowercase:
    const text = e.target.value.toLowerCase();
    
    // Get list:
    const items = itemList.getElementsByTagName('li');

    // convert to an array:
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
};
