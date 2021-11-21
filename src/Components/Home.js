import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import SearchBox from './SearchBox';
import Header from './Header';
import NoResults from './NoResults';

const Home = (props) => {
    let { data, filter } = props;
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }
    const Search = (users) => {
        return users.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()) && (filter === 'all' || user.status.toLowerCase() === filter.toLowerCase()));
    }
    return (
        <div>
            <div className='content-wrapper'>
                <Header />
                <SearchBox searchText={searchText} handleSearch={handleSearch} />
                <div className='container'>
                    {Search(data).length!==0 ? Search(data).map((userData, i) =>
                        <Link key={userData.id} to={{ pathname: `/${userData.id}` }}>
                            <Card key={userData.id} userData={userData} />
                        </Link>
                        
                    ):
                    <NoResults/>
                }
                </div>
            </div>
        </div>
    )
}
export default Home;