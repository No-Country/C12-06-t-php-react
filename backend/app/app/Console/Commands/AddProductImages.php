<?php

namespace App\Console\Commands;

use App\Http\Helpers\CloudinaryHelper;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Console\Command;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

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
            // $image = Storage::disk('public')->get($image_path);

            $image_file = new UploadedFile($image_path, Str::after($image_path, '/'));

            $file_path_cloudinary =  Cloudinary::upload($image_file->getRealPath(), [
                'folder' => 'products/images',
                'public_id' => Str::before($image_file->getClientOriginalName(), '.')
            ])->getSecurePath();

            var_dump($file_path_cloudinary);
            
            // new UploadedFile($image_path);
            // $file_path_cloudinary = CloudinaryHelper::uploadFile($image);
        }
    }
}
