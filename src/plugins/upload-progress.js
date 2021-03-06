/**
 * @module Upload
 * @author crossjs <liwenfu@crossjs.com>
 */

'use strict'

module.exports = function() {
  var plugin = this,
    host = plugin.host

  host.on('uploadStart', function(file) {
    file.widget.$('[data-role="file-progress"]').addClass('active')
  })

  host.on('uploadProgress', function(file, percentage) {
    var progressbar = file.widget.$('[data-role="file-progress"]')
    progressbar.css('width', (1 - percentage) * 100 + '%')
  })

  host.on('uploadSuccess', function(file) {
    var progressbar = file.widget.$('[data-role="file-progress"]')
    progressbar.removeClass('active').html('<span class="iconfont iconfont-ok"></span>')
  })

  // 通知就绪
  this.ready()
}
