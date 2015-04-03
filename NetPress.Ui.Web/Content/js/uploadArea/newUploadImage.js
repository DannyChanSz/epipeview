/*---------plupload新版本js------------*/
//说明书地址：http://www.cnblogs.com/2050/p/3913184.html
var UpLoaderInit = function (pickFileId) {
    var uploader = new plupload.Uploader({
        runtimes: 'html5,flash,silverlight,html4',
        browse_button: pickFileId, // you can pass in id...
        //container: document.getElementById('container'), // ... or DOM Element itself
        url: '/UploadArea/home/upload',
        flash_swf_url: '/Plugins/plupload-2.1.2/js/Moxie.swf',
        silverlight_xap_url: '/Plugins/plupload-2.1.2/js/Moxie.xap',

        filters: {
            max_file_size: '10mb',
            mime_types: [
                { title: "Image files", extensions: "jpg,gif,png" },
                { title: "Zip files", extensions: "zip" }
            ]
        },

        init: {
            PostInit: function () {//当Init事件发生后触发 
                ////document.getElementById('filelist').innerHTML = '';
                //document.getElementById(uploadfilesId).onclick = function () {
                //    alert('uploadfilesId:' + uploadfilesId);
                //    uploader.start();
                //    return false;
                //};
            },

            FilesAdded: function (up, files) {//当文件添加到上传队列后触发 
                plupload.each(files, function (file) {
                    //document.getElementById(pickFileId).innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
                 
                });
                uploader.start();
            },
            FileUploaded: function (up, file, info) {//当队列中的某一个文件上传完成后触发 
                //// Called when file has finished uploading
                //var url = $.parseJSON(info.response).url;


                //alert(url);
                ////document.getElementById('filelist').innerHTML += '<div >' + file.name + "->" + url + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
            },
            UploadProgress: function (up, file) {//会在文件上传过程中不断触发，可以用此事件来显示上传进度 
                //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
            },

            Error: function (up, err) {
                //document.getElementById('console').innerHTML += "\nError #" + err.code + ": " + err.message;
            }
        }
    });

    //uploader.init();
    return uploader;
}