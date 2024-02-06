import styles from "../assets/styles/display.module.css"

export default function DisplayCryptoTable({ data }) {
    console.log(data)

    return (
        <div>
            {
                data?.map((data, index) => (
                    <div key={index} className={styles.coin_container}>
                        <div className={styles.grid_items}>
                        <img src={data?.image} /> {data?.name}</div>
                        <div className={styles.grid_items}>Rs.{data?.current_price}</div>
                        <div className={styles.grid_items}>{data?.market_cap_change_percentage_24h}%</div>
                        <div className={styles.grid_items}>Mkt Cap:<br /> {data?.market_cap}</div>


                    </div>
                ))
            }
        </div>
    )
}
