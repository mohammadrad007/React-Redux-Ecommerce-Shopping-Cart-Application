export default {
  formatCurency: function(num) {
    return "$" + Number(num.toFixed(2)).toLocaleString() + "";
  }
};
