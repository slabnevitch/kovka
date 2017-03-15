/**
 * Created by Aleksey on 29.04.2016.
 */
//window.onload = function () {
//    $(window).load(function () {
//$(document).ready(function () {
(function () {
	var $ = JQ_NEW;
	//$('.calc-zabor-js').on('click', function () {
	var $ = JQ_NEW,
		block_modal = $('#modal-calc-zabor .modal-body'),
		trigerCalc = false,
		dataSend = {},
		id;
	dataSend['_csrf'] = calc_csrf;


	function geInitData() {
		dataSend = {};
		dataSend['_csrf'] = calc_csrf;

		$this = $(this);
		id = $this.data('idCalc');
		dataSend.id = id;
		// debugger;
		dataSend.table_type = $this.data('typeCalc');
		dataSend.standartProduct = $this.data('idRazmer') || 0;

		validate();
		$.ajax({
				url: '/ajax/calc.html',
				type: 'post',

				data: dataSend,
				success: function (data) {
					$('#modal-calc-zabor').modal('show');

					//$('#modal-calc-zabor .modal-body').html(data);
					$('#modal-calc-zabor .modal-body-calc').html(data);
					//$('.castom-product').hide("slow");

					$('.standartProduct').on('change', productNoStandart);
					chekBoxKraska();

					//console.log(data);
					console.log('Response Ok');
				},
				error: function (data) {
					console.log(data);
					console.log("err send data");
				}
			}
		)
	}

	function getNewData() {
		var form = block_modal.find('form'),
			$this = $(this);
		//dataSend = {};
		validate();
		dataSend = form.serialize();

		dataSend.id = $this.data('idCalc');
		dataSend.table_type = $this.data('typeCalc');

		//dataSend.id =
		$.ajax({
				url: '/ajax/calc.html',
				type: 'post',

				data: dataSend,
				success: function (data) {
					$('#modal-calc-zabor').modal('show');
					//$('#modal-calc-zabor .modal-body').html(data);

					$('#modal-calc-zabor .modal-body-calc').html(data);
					$('.standartProduct').on('change', productNoStandart);
					chekBoxKraska();

					//console.log(data);
					console.log('Respose Ok');
				},
				error: function (data) {
					console.log(data);
					console.log("err send data");
				}
			}
		)
	}


	function chekBoxKraska() {
		$('.pockraska').on('change', function () {
			if ($(this).is(':checked')) {
				//$(this).attr('readonly',true);
				$('.pockraska_xamertai').prop('checked', false);
			} else {
				$('.pockraska_xamertai').prop('checked', true);
			}
		});

		$('.pockraska_xamertai').on('change', function () {
			if ($(this).is(':checked')) {
				$('.pockraska').prop('checked', false);
			} else {
				$('.pockraska').prop('checked', true);
			}
		});
	}


	function productNoStandart(ev) {
		var $t = $(this);
		if ($t.val() == 0) {
			$(this).parent().parent().find('.castom-product').show("slow");
		} else {
			$(this).parent().parent().find('.castom-product').hide("slow");
			// $('.castom-product').hide("slow");
		}

	}

	function validate() {
		block_modal.find('input:text').each(function (i, el) {
			el.value = parseInt(el.value);
		})


	}


// Устновка обработчиков событий

	// на открытие формы Большая кнопка
	$('.calc-zabor-js').on('click', geInitData);

	// на размеры
	$('.calc-zabor-js-razmer').on('click', geInitData);

	// на кнопку запроса расчета

	$('#calc-do-zapros').on('click', getNewData);


	//добавить в корзину


	function sendToBasket() {

		var form = block_modal.find('form'),
			$this = $(this);
		//dataSend = {};
		validate();
		dataSend = form.serialize();

		//$('#modal-calc-zabor .modal-body-calc').html('<div style="font-size: larger;color: #0f0f0f">Данные добавлены в корзину</div>');


		validate();
		$.ajax({
				url: '/ajax/basket.html',
				type: 'post',

				data: dataSend,
				success: function (data) {


					var buttonBlock = block_modal.find('.calc-do');
					buttonBlock.hide();


					//$('#modal-calc-zabor .modal-body').html(data);
					block_modal.find('.modal-body-calc').html('<div style="font-size: xx-large; ' +
						'color: #0f0f0f; height: 200px; width: 500px; text-align: center;line-height: 120px; padding-top: 50px">' +
						'Данные добавлены в корзину</div>');
					window.setTimeout(function () {
						$('#modal-calc-zabor').modal('hide');
						buttonBlock.show();
					}, 2100);

					//$('#modal-calc-zabor .modal-body-calc').html('<div style="font-size: larger">Данные добавлены в корзину</div>');
					//console.log(data);
					//console.log('Response Ok');
				},
				error: function (data) {
					//console.log(data);
					console.log("err send data");
				}
			}
		)


	}


	$('#calc-add-basket').on('click', sendToBasket);

	//console.log('klik');
})
();

/*

 jQuery(document).ready(function () {
 jQuery('#w0').yiiActiveForm([{
 "id": "productzabor-standartproduct",
 "name": "standartProduct",
 "container": ".field-productzabor-standartproduct",
 "input": "#productzabor-standartproduct",
 "validate": function (attribute, value, messages, deferred, $form) {
 yii.validation.number(value, messages, {
 "pattern": /^\s*[+-]?\d+\s*$/,
 "message": "Значение «Standart Product» должно быть целым числом.",
 "skipOnEmpty": 1
 });
 }
 }, {
 "id": "productzabor-countsection",
 "name": "countSection",
 "container": ".field-productzabor-countsection",
 "input": "#productzabor-countsection",
 "validate": function (attribute, value, messages, deferred, $form) {
 yii.validation.number(value, messages, {
 "pattern": /^\s*[+-]?\d+\s*$/,
 "message": "Значение «Count Section» должно быть целым числом.",
 "skipOnEmpty": 1
 });
 }
 }, {
 "id": "productzabor-stolb_60_50",
 "name": "stolb_60_50",
 "container": ".field-productzabor-stolb_60_50",
 "input": "#productzabor-stolb_60_50",
 "validate": function (attribute, value, messages, deferred, $form) {
 yii.validation.number(value, messages, {
 "pattern": /^\s*[+-]?\d+\s*$/,
 "message": "Значение «Stolb 60 50» должно быть целым числом.",
 "skipOnEmpty": 1
 });
 }
 }, {
 "id": "productzabor-stolb_60_40",
 "name": "stolb_60_40",
 "container": ".field-productzabor-stolb_60_40",
 "input": "#productzabor-stolb_60_40",
 "validate": function (attribute, value, messages, deferred, $form) {
 yii.validation.number(value, messages, {
 "pattern": /^\s*[+-]?\d+\s*$/,
 "message": "Значение «Stolb 60 40» должно быть целым числом.",
 "skipOnEmpty": 1
 });
 }
 }, {
 "id": "productzabor-stolb_60_60",
 "name": "stolb_60_60",
 "container": ".field-productzabor-stolb_60_60",
 "input": "#productzabor-stolb_60_60",
 "validate": function (attribute, value, messages, deferred, $form) {
 yii.validation.number(value, messages, {
 "pattern": /^\s*[+-]?\d+\s*$/,
 "message": "Значение «Stolb 60 60» должно быть целым числом.",
 "skipOnEmpty": 1
 });
 }
 }, {
 "id": "productzabor-stolb_80_80",
 "name": "stolb_80_80",
 "container": ".field-productzabor-stolb_80_80",
 "input": "#productzabor-stolb_80_80",
 "validate": function (attribute, value, messages, deferred, $form) {
 yii.validation.number(value, messages, {
 "pattern": /^\s*[+-]?\d+\s*$/,
 "message": "Значение «Stolb 80 80» должно быть целым числом.",
 "skipOnEmpty": 1
 });
 }
 }, {
 "id": "productzabor-ust_all",
 "name": "ust_all",
 "container": ".field-productzabor-ust_all",
 "input": "#productzabor-ust_all",
 "validate": function (attribute, value, messages, deferred, $form) {
 yii.validation.number(value, messages, {
 "pattern": /^\s*[+-]?\d+\s*$/,
 "message": "Значение «Ust All» должно быть целым числом.",
 "skipOnEmpty": 1
 });
 }
 }, {
 "id": "productzabor-pockraska",
 "name": "pockraska",
 "container": ".field-productzabor-pockraska",
 "input": "#productzabor-pockraska",
 "validate": function (attribute, value, messages, deferred, $form) {
 yii.validation.number(value, messages, {
 "pattern": /^\s*[+-]?\d+\s*$/,
 "message": "Значение «Pockraska» должно быть целым числом.",
 "skipOnEmpty": 1
 });
 }
 }, {
 "id": "productzabor-pockraska_xamertai",
 "name": "pockraska_xamertai",
 "container": ".field-productzabor-pockraska_xamertai",
 "input": "#productzabor-pockraska_xamertai",
 "validate": function (attribute, value, messages, deferred, $form) {
 yii.validation.number(value, messages, {
 "pattern": /^\s*[+-]?\d+\s*$/,
 "message": "Значение «Pockraska Xamertai» должно быть целым числом.",
 "skipOnEmpty": 1
 });
 }
 }], [])*/
