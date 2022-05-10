import React, { useEffect, useState } from 'react'
import { Card } from '@rick-and-morty/styleguide'
import { getAllCharacters } from "@rick-and-morty/api";

export const GalleryGrid = () => {

    const [data, setData] = useState({
        info: {},
        results: []
    });

    useEffect(() => {
        getAllCharacters().then(data => {
            setData(data);
        });
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    data.results.map(character => (
                        <Card character={character} key={character.id} />
                    ))
                }
            </div>
        </div>
    )
}
