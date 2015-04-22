DUOSHUO_URL = "http://api.duoshuo.com";
$(function() {
	$('.comments-count').each(function() {
			var self = this;
			var url = DUOSHUO_URL +
					encodeURI(
							"/threads/counts.jsonp?short_name=mohist&threads="
							+ $(this).attr("data-thread-key")
							+ "&callback=?");

			$.getJSON(url, function(data) {
					response = data.response[$(self).attr("data-thread-key")];
					$(".likes-count-span", $(self)).text(response["likes"]);
					$(".comments-count-span", $(self)).text(response["comments"]);
			});

	})
});
