<template>
  <div class="signings-add-container">
    <div class="col-md-12 ">
      <!-- BEGIN SAMPLE FORM PORTLET-->
      <div class="portlet light bordered">
        <div class="portlet-title">
          <div class="caption">
            <i class="icon-settings font-dark"></i>
            <span class="caption-subject font-dark sbold uppercase">Horizontal Form</span>
          </div>
          <div class="actions">
            <div class="btn-group btn-group-devided" data-toggle="buttons">
              <label class="btn btn-transparent dark btn-outline btn-circle btn-sm active">
                <input type="radio" name="options" class="toggle" id="option1">Actions</label>
              <label class="btn btn-transparent dark btn-outline btn-circle btn-sm">
                <input type="radio" name="options" class="toggle" id="option2">Settings</label>
            </div>
          </div>
        </div>
        <div class="portlet-body form">
          <form action="#" id="form_sample_1" class="form-horizontal" novalidate="novalidate">
            <div class="form-body">
              <div class="alert alert-danger display-hide">
                <button class="close" data-close="alert"></button> You have some form errors. Please check below. </div>
              <div class="alert alert-success display-hide">
                <button class="close" data-close="alert"></button> Your form validation is successful! </div>
              <div class="form-group">
                <label class="control-label col-md-3">Name
                  <span class="required" aria-required="true"> * </span>
                </label>
                <div class="col-md-4">
                  <input type="text" name="name" data-required="1" class="form-control"> </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3">Email
                  <span class="required" aria-required="true"> * </span>
                </label>
                <div class="col-md-4">
                  <input name="email" type="text" class="form-control"> </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3">URL
                  <span class="required" aria-required="true"> * </span>
                </label>
                <div class="col-md-4">
                  <input name="url" type="text" class="form-control">
                  <span class="help-block"> e.g: http://www.demo.com or http://demo.com </span>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3">Number
                  <span class="required" aria-required="true"> * </span>
                </label>
                <div class="col-md-4">
                  <input name="number" type="text" class="form-control"> </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3">Digits
                  <span class="required" aria-required="true"> * </span>
                </label>
                <div class="col-md-4">
                  <input name="digits" type="text" class="form-control"> </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3">Credit Card
                  <span class="required" aria-required="true"> * </span>
                </label>
                <div class="col-md-4">
                  <input name="creditcard" type="text" class="form-control">
                  <span class="help-block"> e.g: 5500 0000 0000 0004 </span>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3">Occupation&nbsp;&nbsp;</label>
                <div class="col-md-4">
                  <input name="occupation" type="text" class="form-control">
                  <span class="help-block"> optional field </span>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3">Select
                  <span class="required" aria-required="true"> * </span>
                </label>
                <div class="col-md-4">
                  <select class="form-control" name="select">
                    <option value="">Select...</option>
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                    <option value="Category 3">Category 5</option>
                    <option value="Category 4">Category 4</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3">Multi Select
                  <span class="required" aria-required="true"> * </span>
                </label>
                <div class="col-md-4">
                  <select class="form-control" name="select_multi" multiple="">
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                    <option value="Category 3">Category 3</option>
                    <option value="Category 4">Category 4</option>
                    <option value="Category 5">Category 5</option>
                  </select>
                  <span class="help-block"> select max 3 options, min 1 option </span>
                </div>
              </div>
            </div>
            <div class="form-actions">
              <div class="row">
                <div class="col-md-offset-3 col-md-9">
                  <button type="submit" class="btn green">Submit</button>
                  <button type="button" class="btn grey-salsa btn-outline">Cancel</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>
