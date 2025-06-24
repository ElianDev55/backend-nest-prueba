import { IsDecimal, IsDefined, IsOptional, IsUUID } from 'class-validator';

export class CreateBillDetailDto {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsUUID()
  @IsOptional()
  diches_id?: string;

  @IsUUID()
  @IsOptional()
  bill_id?: string;

  @IsUUID()
  @IsOptional()
  add_id?: string;

  @IsUUID()
  @IsOptional()
  souces_id?: string;

  @IsUUID()
  @IsOptional()
  drinks_id?: string;

  @IsUUID()
  @IsOptional()
  chips_id?: string;

  @IsOptional()
  @IsDecimal()
  total?: number;

  @IsDefined()
  @IsUUID()
  created_by: string;
}
{
    "data": {
        "bills": [
            {
                "id": "75b5ba90-3a67-4423-912f-dd15d5bc7cdb",
                "total": "37.75",
                "created_at": "2025-06-24T07:03:50.227Z",
                "updated_at": "2025-06-24T07:03:50.227Z",
                "is_deleted": null,
                "created_by": "7d6eaa59-40e3-425d-af98-78e4f324ba94"
            }
        ],
        "billDetails": [
            {
                "id": "01f89db8-8542-4143-b872-f45703e45de3",
                "bill_id": "75b5ba90-3a67-4423-912f-dd15d5bc7cdb",
                "bill": {
                    "id": "75b5ba90-3a67-4423-912f-dd15d5bc7cdb",
                    "total": "37.75",
                    "created_at": "2025-06-24T07:03:50.227Z",
                    "updated_at": "2025-06-24T07:03:50.227Z",
                    "is_deleted": null,
                    "created_by": "7d6eaa59-40e3-425d-af98-78e4f324ba94"
                },
                "diches_id": null,
                "diches": null,
                "add_id": "47ff5a37-e791-43c0-9b45-fd424bbe0fca",
                "add": {
                    "id": "47ff5a37-e791-43c0-9b45-fd424bbe0fca",
                    "name": "Guacamole",
                    "price": "1.50",
                    "created_at": "2025-06-23T23:31:04.899Z",
                    "updated_at": "2025-06-23T23:31:04.899Z",
                    "is_deleted": null,
                    "created_by": "7d6eaa59-40e3-425d-af98-78e4f324ba94"
                },
                "souces_id": null,
                "souces": null,
                "drinks_id": "59986183-da49-4e0f-96c4-52e12255f90b",
                "drinks": {
                    "id": "59986183-da49-4e0f-96c4-52e12255f90b",
                    "name": "Gaseosa Naranja",
                    "price": "2.00",
                    "image": "https://lostanitos.com/cdn/shop/products/208178_p.jpg?v=1600996294",
                    "created_at": "2025-06-23T23:20:16.655Z",
                    "updated_at": "2025-06-23T23:20:16.655Z",
                    "is_deleted": null
                },
                "chips_id": "20c67437-864f-44bc-aeb7-cce26d2e51b5",
                "chips": {
                    "id": "20c67437-864f-44bc-aeb7-cce26d2e51b5",
                    "name": "Papas en Cascos con Piel",
                    "price": "3.25",
                    "image": "https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP2967909A-h-o.webp",
                    "created_at": "2025-06-23T23:23:01.843Z",
                    "updated_at": "2025-06-23T23:23:01.843Z",
                    "is_deleted": null
                },
                "total": "6.75",
                "created_at": "2025-06-24T07:03:50.555Z",
                "updated_at": "2025-06-24T07:03:50.555Z",
                "is_deleted": null
            },
            {
                "id": "606c8abf-358d-4f3a-8cb7-7fc5cf72ca0b",
                "bill_id": "75b5ba90-3a67-4423-912f-dd15d5bc7cdb",
                "bill": {
                    "id": "75b5ba90-3a67-4423-912f-dd15d5bc7cdb",
                    "total": "37.75",
                    "created_at": "2025-06-24T07:03:50.227Z",
                    "updated_at": "2025-06-24T07:03:50.227Z",
                    "is_deleted": null,
                    "created_by": "7d6eaa59-40e3-425d-af98-78e4f324ba94"
                },
                "diches_id": null,
                "diches": null,
                "add_id": null,
                "add": null,
                "souces_id": null,
                "souces": null,
                "drinks_id": null,
                "drinks": null,
                "chips_id": "20c67437-864f-44bc-aeb7-cce26d2e51b5",
                "chips": {
                    "id": "20c67437-864f-44bc-aeb7-cce26d2e51b5",
                    "name": "Papas en Cascos con Piel",
                    "price": "3.25",
                    "image": "https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP2967909A-h-o.webp",
                    "created_at": "2025-06-23T23:23:01.843Z",
                    "updated_at": "2025-06-23T23:23:01.843Z",
                    "is_deleted": null
                },
                "total": "3.25",
                "created_at": "2025-06-24T07:03:50.895Z",
                "updated_at": "2025-06-24T07:03:50.895Z",
                "is_deleted": null
            },
            {
                "id": "673ea371-5728-472f-ab68-5a1c80f71037",
                "bill_id": "75b5ba90-3a67-4423-912f-dd15d5bc7cdb",
                "bill": {
                    "id": "75b5ba90-3a67-4423-912f-dd15d5bc7cdb",
                    "total": "37.75",
                    "created_at": "2025-06-24T07:03:50.227Z",
                    "updated_at": "2025-06-24T07:03:50.227Z",
                    "is_deleted": null,
                    "created_by": "7d6eaa59-40e3-425d-af98-78e4f324ba94"
                },
                "diches_id": "16cdda49-3262-44d7-a46e-4e8a62b56f30",
                "diches": {
                    "id": "16cdda49-3262-44d7-a46e-4e8a62b56f30",
                    "name": "Mar y Tierra",
                    "price": "13",
                    "image": "https://media-cdn.tripadvisor.com/media/photo-s/1c/e5/2f/6f/hamburguesa-mar-y-tierra.jpg",
                    "created_at": "2025-06-23T17:21:43.441Z",
                    "updated_at": "2025-06-23T17:22:12.043Z",
                    "is_deleted": null,
                    "created_by": "7d6eaa59-40e3-425d-af98-78e4f324ba94"
                },
                "add_id": "47ff5a37-e791-43c0-9b45-fd424bbe0fca",
                "add": {
                    "id": "47ff5a37-e791-43c0-9b45-fd424bbe0fca",
                    "name": "Guacamole",
                    "price": "1.50",
                    "created_at": "2025-06-23T23:31:04.899Z",
                    "updated_at": "2025-06-23T23:31:04.899Z",
                    "is_deleted": null,
                    "created_by": "7d6eaa59-40e3-425d-af98-78e4f324ba94"
                },
                "souces_id": null,
                "souces": null,
                "drinks_id": "59986183-da49-4e0f-96c4-52e12255f90b",
                "drinks": {
                    "id": "59986183-da49-4e0f-96c4-52e12255f90b",
                    "name": "Gaseosa Naranja",
                    "price": "2.00",
                    "image": "https://lostanitos.com/cdn/shop/products/208178_p.jpg?v=1600996294",
                    "created_at": "2025-06-23T23:20:16.655Z",
                    "updated_at": "2025-06-23T23:20:16.655Z",
                    "is_deleted": null
                },
                "chips_id": "20c67437-864f-44bc-aeb7-cce26d2e51b5",
                "chips": {
                    "id": "20c67437-864f-44bc-aeb7-cce26d2e51b5",
                    "name": "Papas en Cascos con Piel",
                    "price": "3.25",
                    "image": "https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP2967909A-h-o.webp",
                    "created_at": "2025-06-23T23:23:01.843Z",
                    "updated_at": "2025-06-23T23:23:01.843Z",
                    "is_deleted": null
                },
                "total": "19.75",
                "created_at": "2025-06-24T07:03:50.423Z",
                "updated_at": "2025-06-24T07:03:50.423Z",
                "is_deleted": null
            },
            {
                "id": "9255fbeb-246d-449f-b942-7cee39ac4481",
                "bill_id": "75b5ba90-3a67-4423-912f-dd15d5bc7cdb",
                "bill": {
                    "id": "75b5ba90-3a67-4423-912f-dd15d5bc7cdb",
                    "total": "37.75",
                    "created_at": "2025-06-24T07:03:50.227Z",
                    "updated_at": "2025-06-24T07:03:50.227Z",
                    "is_deleted": null,
                    "created_by": "7d6eaa59-40e3-425d-af98-78e4f324ba94"
                },
                "diches_id": null,
                "diches": null,
                "add_id": "47ff5a37-e791-43c0-9b45-fd424bbe0fca",
                "add": {
                    "id": "47ff5a37-e791-43c0-9b45-fd424bbe0fca",
                    "name": "Guacamole",
                    "price": "1.50",
                    "created_at": "2025-06-23T23:31:04.899Z",
                    "updated_at": "2025-06-23T23:31:04.899Z",
                    "is_deleted": null,
                    "created_by": "7d6eaa59-40e3-425d-af98-78e4f324ba94"
                },
                "souces_id": null,
                "souces": null,
                "drinks_id": null,
                "drinks": null,
                "chips_id": "20c67437-864f-44bc-aeb7-cce26d2e51b5",
                "chips": {
                    "id": "20c67437-864f-44bc-aeb7-cce26d2e51b5",
                    "name": "Papas en Cascos con Piel",
                    "price": "3.25",
                    "image": "https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP2967909A-h-o.webp",
                    "created_at": "2025-06-23T23:23:01.843Z",
                    "updated_at": "2025-06-23T23:23:01.843Z",
                    "is_deleted": null
                },
                "total": "4.75",
                "created_at": "2025-06-24T07:03:50.669Z",
                "updated_at": "2025-06-24T07:03:50.669Z",
                "is_deleted": null
            },
            {
                "id": "ec6a3e2e-697f-4b2b-8724-462bc22c067f",
                "bill_id": "75b5ba90-3a67-4423-912f-dd15d5bc7cdb",
                "bill": {
                    "id": "75b5ba90-3a67-4423-912f-dd15d5bc7cdb",
                    "total": "37.75",
                    "created_at": "2025-06-24T07:03:50.227Z",
                    "updated_at": "2025-06-24T07:03:50.227Z",
                    "is_deleted": null,
                    "created_by": "7d6eaa59-40e3-425d-af98-78e4f324ba94"
                },
                "diches_id": null,
                "diches": null,
                "add_id": null,
                "add": null,
                "souces_id": null,
                "souces": null,
                "drinks_id": null,
                "drinks": null,
                "chips_id": "20c67437-864f-44bc-aeb7-cce26d2e51b5",
                "chips": {
                    "id": "20c67437-864f-44bc-aeb7-cce26d2e51b5",
                    "name": "Papas en Cascos con Piel",
                    "price": "3.25",
                    "image": "https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP2967909A-h-o.webp",
                    "created_at": "2025-06-23T23:23:01.843Z",
                    "updated_at": "2025-06-23T23:23:01.843Z",
                    "is_deleted": null
                },
                "total": "3.25",
                "created_at": "2025-06-24T07:03:50.772Z",
                "updated_at": "2025-06-24T07:03:50.772Z",
                "is_deleted": null
            }
        ]
    },
    "date": "2025-06-24T07:14:34.028Z",
    "status": 200
}
