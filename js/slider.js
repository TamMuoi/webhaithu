		$(document).ready(function() {
			$('#img1').click(function(event) {
				
				var srcImg=$('#img1').attr("src");

			
				$('#image-main').fadeOut(500,function() {
					$('#image-main').attr("src",srcImg);
					$('#image-main').fadeIn();
				});
				

				
				$('#img1').removeAttr('style');
				$('#img2').removeAttr('style');
				$('#img3').removeAttr('style');
				$('#img4').removeAttr('style');
				$('#img5').removeAttr('style');

				$('#img1').attr("style","border:1px solid #17556c");
			});
			$('#img2').click(function(event) {
			
				var srcImg=$('#img2').attr("src");

				
			$('#image-main').fadeOut(500,function() {
					$('#image-main').attr("src",srcImg);
					$('#image-main').fadeIn();
				});

	
				$('#img1').removeAttr('style');
				$('#img2').removeAttr('style');
				$('#img3').removeAttr('style');
				$('#img4').removeAttr('style');
				$('#img5').removeAttr('style');

				$('#img2').attr("style","border:1px solid #17556c");
			});
			$('#img3').click(function(event) {
	
				var srcImg=$('#img3').attr("src");

				
				$('#image-main').fadeOut(500,function() {
					$('#image-main').attr("src",srcImg);
					$('#image-main').fadeIn();
				});

		
				$('#img1').removeAttr('style');
				$('#img2').removeAttr('style');
				$('#img3').removeAttr('style');
				$('#img4').removeAttr('style');
				$('#img5').removeAttr('style');

				$('#img3').attr("style","border:1px solid #17556c");
			});
			$('#img4').click(function(event) {
			
				var srcImg=$('#img4').attr("src");

				// Thay đổi thuộc tính src của id =img-main
				$('#image-main').fadeOut(500,function() {
					$('#image-main').attr("src",srcImg);
					$('#image-main').fadeIn();
				});


				$('#img1').removeAttr('style');
				$('#img2').removeAttr('style');
				$('#img3').removeAttr('style');
				$('#img4').removeAttr('style');
				$('#img5').removeAttr('style');

				$('#img4').attr("style","border:1px solid #17556c");
			});
			$('#img5').click(function(event) {

				var srcImg=$('#img5').attr("src");

		
				$('#image-main').fadeOut(500,function() {
					$('#image-main').attr("src",srcImg);
					$('#image-main').fadeIn();
				});


				$('#img1').removeAttr('style');
				$('#img2').removeAttr('style');
				$('#img3').removeAttr('style');
				$('#img4').removeAttr('style');
				$('#img5').removeAttr('style');

				$('#img5').attr("style","border:1px solid #17556c");
			});
		});