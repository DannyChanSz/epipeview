//plupload
function createUpload(container, pickfiles,  filelist, console) {

    var uploader = new plupload.Uploader({

        runtimes: 'html5,flash,silverlight,html4',

        browse_button: pickfiles, // you can pass in id...

        container: document.getElementById(container), // ... or DOM Element itself

        url: '/UploadArea/home/UploadAttachment',

        flash_swf_url: '/Plugins/plupload-2.1.2/js/Moxie.swf',

        silverlight_xap_url: '/Plugins/plupload-2.1.2/js/Moxie.xap',

        filters: {
            //   max_file_size: '10mb',
            max_file_size: '10mb',
            mime_types: [
                { title: "Image files", extensions: "jpg,gif" },
                { title: "Zip files", extensions: "zip" },
                { title: "Microsoft files", extensions: "doc,docx,xls,xlsx" }
            ]
        },

        init: {
            PostInit: function () {
                document.getElementById(filelist).innerHTML = '';
                //document.getElementById(uploadfiles).onclick = function () {
                //    uploader.start();
                //    return false;
                //};
            },

            FilesAdded: function (up, files) {
                //document.getElementById(filelist).innerHTML = "";
                document.getElementById(console).innerHTML = "";

                plupload.each(files, function (file) {
                    document.getElementById(filelist).innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
                });
                uploader.start();
            },
            FileUploaded: function (up, file, info) {

            },
            UploadProgress: function (up, file) {
                document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
            },

            Error: function (up, err) {
                document.getElementById(console).innerHTML = "\nError #" + err.code + ": " + err.message;
                if(err.code=="-601")
                {
                    document.getElementById(console).innerHTML = "其他格式请打包成zip上传";
                }
                else if(err.code=="-600")
                {
                    document.getElementById(console).innerHTML = "请选择10M以下附件";
                }
                
            }
        }
    });
    return uploader;
}