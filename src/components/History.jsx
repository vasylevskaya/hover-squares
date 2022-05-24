const History = ({ history }) => (
  <div className="history-board">
    <h1 className="history-board_title">Hover squares</h1>
    {
      history.reverse().map((historyItem, index) => (
        <p className="history-board_item" key={`history-item_${index}`}>
          {`row: ${historyItem.row}, column: ${historyItem.column}`}
        </p>
      ))
    }
  </div>
)

export default History
