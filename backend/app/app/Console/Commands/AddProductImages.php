<?php

namespace App\Console\Commands;

use App\Http\Helpers\CloudinaryHelper;
use App\Http\Helpers\ImagesHelper;
use App\Models\Image;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Console\Command;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class AddProductImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:add-product-images';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $images_to_upload = Storage::disk('public')->files('product_images');

        var_dump($images_to_upload);

        // die();

        foreach ($images_to_upload as $image_path) {
            $image = Storage::disk('public')->get($image_path);

            $path = Cloudinary::upload($image_path, [
                'folder' => 'products/images',
                'public_id' => $image_path
            ])->getSecurePath();

                var_dump($path);
                die();

            // new UploadedFile($image_path);
            $file_path_cloudinary = CloudinaryHelper::uploadFile($image);
            var_dump($file_path_cloudinary);
        }
    }
}
