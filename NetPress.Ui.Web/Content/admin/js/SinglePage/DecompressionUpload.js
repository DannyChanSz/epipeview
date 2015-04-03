//plupload
function createUpload(container, pickfiles, uploadfiles, filelist, console) {

    var uploader = new plupload.Uploader({

        runtimes: 'html5,flash,silverlight,html4',

        browse_button: pickfiles, // you can pass in id...

        container: document.getElementById(container), // ... or DOM Element itself

        url: '/UploadArea/home/DecompressionUpload',

        flash_swf_url: '/Plugins/plupload-2.1.2/js/Moxie.swf',

        silverlight_xap_url: '/Plugins/plupload-2.1.2/js/Moxie.xap',

        filters: {
            //   max_file_size: '10mb',
            max_file_size: '100mb',
            mime_types: [
                { title: "Zip files", extensions: "zip" }
            ]
        },

        init: {
            PostInit: function () {
                document.getElementById(filelist).innerHTML = '';
                document.getElementById(uploadfiles).onclick = function () {
                    uploader.start();
                    return false;
                };
            },

            FilesAdded: function (up, files) {
                plupload.each(files, function (file) {
                    document.getElementById(filelist).innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
                });
            },
            FileUploaded: function (up, file, info) {

            },
            UploadProgress: function (up, file) {
                document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
            },

            Error: function (up, err) {
                document.getElementById(console).innerHTML += "\nError #" + err.code + ": " + err.message;
            }
        }
    });
    return uploader;
}