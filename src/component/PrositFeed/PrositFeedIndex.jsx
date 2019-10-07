import PropTypes from 'prop-types'
import React from 'react'
import { useQuery } from 'react-apollo';
import { PROSIT_FEED_BY_CLASS } from '../../graphql/queries/Prosit';

const PrositFeedIndex = props => {

    const { client,
        data,
        error,
        loading,
        networkStatus,
        called } = useQuery(PROSIT_FEED_BY_CLASS)
    if (loading) return <div > loading </div>
    if (error) return <div > error </div>

    return (

        data.prositsByPromo.map(prosit => {

            return (
                <div>
                    <h4> {prosit.nomProsit.replace(/_/g, ' ').split(/(?=[A-Z])/).join(" ")} </h4>
                    <ul>
                        {prosit.motsClef.slice(0, 4).map((motsClef, index) => (<li key={index} className="">{motsClef}</li>))}
                    </ul>
                </div>
            )
        })
    )

}

PrositFeedIndex.propTypes = {

}

export default PrositFeedIndex
