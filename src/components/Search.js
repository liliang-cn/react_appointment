import React from 'react';

const Search = ({orderBy, orderDir, handleSort, handleOrder, handleSearch}) => (
    <div className="input-group">
        <input id="SearchApts" placeholder="搜索" type="text" className="form-control" aria-label="Search Appointments" 
            onChange={e => handleSearch(e.target.value)}
        />
        <div className="input-group-btn">
            <button type="button" className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">查看方式: <span className="caret"></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-right">
                <li>
                    <a href="#" id="petName" onClick={e => handleSort(e.target.id)}>
                        宠物名字 {orderBy === 'petName' ? <sapn className="glyphicon glyphicon-ok"></sapn> : ''}
                    </a>
                </li>
                <li>
                    <a href="#" id="aptDate" onClick={e => handleSort(e.target.id)}>
                        日期 {orderBy === 'aptDate' ? <sapn className="glyphicon glyphicon-ok"></sapn> : ''}
                    </a>
                </li>
                <li>
                    <a href="#" id="ownerName" onClick={e => handleSort(e.target.id)}>
                        主人 {orderBy === 'ownerName' ? <sapn className="glyphicon glyphicon-ok"></sapn>: ''}
                    </a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                    <a href="#" id="asc" onClick={e => handleOrder(e.target.id)}>
                        增序 {orderDir === 'asc' ? <sapn className="glyphicon glyphicon-ok"></sapn> : ''}
                    </a>
                </li>
                <li>
                    <a href="#" id="desc" onClick={e => handleOrder(e.target.id)}>
                         降序 {orderDir === 'desc' ? <sapn className="glyphicon glyphicon-ok"></sapn> : ''}
                    </a>
                </li>
            </ul>
        </div>
    </div>
);

export default Search;