import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductDetail } from '../../actions';

function ProductDetail(props) {
  useEffect(() => {
    props.getProductDetail(props.match.params.productId);
  }, []);

  const { loading, error, data } = props.productDetail;

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>{data.title}</h1>
      {data.images ? <img src={data.images[0]} width={200} alt="" /> : null}
    </>
  );
}

function mapStateToProps({ productDetail }) {
  return { productDetail };
}

function mapDispatchToProps(dispatch) {
  return {
    getProductDetail: productId => dispatch(getProductDetail(productId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);