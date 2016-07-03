require 'test_helper'

class CuisineTypesControllerTest < ActionController::TestCase
  setup do
    @cuisine_type = cuisine_types(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:cuisine_types)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create cuisine_type" do
    assert_difference('CuisineType.count') do
      post :create, cuisine_type: {  }
    end

    assert_redirected_to cuisine_type_path(assigns(:cuisine_type))
  end

  test "should show cuisine_type" do
    get :show, id: @cuisine_type
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @cuisine_type
    assert_response :success
  end

  test "should update cuisine_type" do
    patch :update, id: @cuisine_type, cuisine_type: {  }
    assert_redirected_to cuisine_type_path(assigns(:cuisine_type))
  end

  test "should destroy cuisine_type" do
    assert_difference('CuisineType.count', -1) do
      delete :destroy, id: @cuisine_type
    end

    assert_redirected_to cuisine_types_path
  end
end
