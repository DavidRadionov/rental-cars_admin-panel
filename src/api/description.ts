export class Obj {
    string: string = "";
    count: number = 0;
}

export class Statistic {
    totalUsers: number = 0;
    totalAdvertisements: number = 0;
    qtyCarsByMake: Obj[] = [];
    qtyAdvertisementsByLocation: Obj[] = [];
}

export class User {
    id: number = 0;
    fio: string = "";
    email: string = "";
    blocked: boolean = false;
    verified: boolean = false;
    phone: string = "";
    passportNumber: number = 0;
    driverLicenseNumber: number = 0;
}

export class UserInfo {
    profilePhoto: string = "";
    passportPhoto: string =  "";
    driverLicensePhoto: string = "";
    user: User = new User();
}

export class Comment {
    id: number = 0;
    mark?: number = 0;
    message?: string = "";
    comment?: string = "";
    userByUserId?: User = new User();
    userByUserFrom?: User = new User();
    userByUserTo?: User = new User();
    carByCarTo?: Car = new Car();
}
export class Car {
    id: number = 0;
    make: string = "";
    model: string = "";
    licensePlate: string = "";

}

export class Advertisement {
    id: number = 0;
    userId: number = 0;
    location: number = 0;
    latitude: number = 0;
    longitude: number = 0;
    verified: boolean = false;
    cardId: number = 0;
    pricePerDay: number = 0;
    pricePerWeek: number = 0;
    pricePerMonth: number = 0;

}

export class Advertisements {
    advertisement: Advertisement
    car: Car = new Car();
    photoPaths: String[] = [];
}

const advertisements = {
    "advertisement": {
        "id": 3,
        "userId": 1,
        "location": "Брест",
        "latitude": 52.096,
        "longitude": 23.6827,
        "publicationDate": "2022-12-07T20:43:03.000+00:00",
        "verified": true,
        "carId": 5,
        "pricePerDay": 100,
        "pricePerWeek": 500,
        "pricePerMonth": 1200,
        "ridesById": [
            {
                "id": 8,
                "advertisementId": 3,
                "lessorId": 6,
                "dateStart": "2022-12-13T22:56:05.000+00:00",
                "dateEnd": "1970-01-01T00:00:00.000+00:00",
                "dateSignedLessor": "2022-12-15T13:40:05.000+00:00",
                "dateSignedLessee": "1970-01-01T00:00:00.000+00:00",
                "chatLink": "",
                "paymentLink": "",
                "totalCost": 0,
                "supertypeEntityById": {
                    "id": 8
                }
            }
        ]
    },
    "car": {
        "id": 5,
        "vin": "WBA4J3C59JBG91042",
        "licensePlate": "5628MP-1",
        "make": "BMW",
        "model": "4 Serie Gran Coupe",
        "manufacturedYear": "2018-05-19T21:00:00.000+00:00",
        "transmissionType": "Автоматическая",
        "fuelType": "Бензин",
        "doors": 4,
        "seats": 5,
        "carType": "Лифтбек",
        "color": "Синий",
        "advertisementsById": [
            {
                "id": 3,
                "userId": 1,
                "location": "Брест",
                "latitude": 52.096,
                "longitude": 23.6827,
                "publicationDate": "2022-12-07T20:43:03.000+00:00",
                "verified": true,
                "carId": 5,
                "pricePerDay": 100,
                "pricePerWeek": 500,
                "pricePerMonth": 1200,
                "ridesById": [
                    {
                        "id": 8,
                        "advertisementId": 3,
                        "lessorId": 6,
                        "dateStart": "2022-12-13T22:56:05.000+00:00",
                        "dateEnd": "1970-01-01T00:00:00.000+00:00",
                        "dateSignedLessor": "2022-12-15T13:40:05.000+00:00",
                        "dateSignedLessee": "1970-01-01T00:00:00.000+00:00",
                        "chatLink": "",
                        "paymentLink": "",
                        "totalCost": 0,
                        "supertypeEntityById": {
                            "id": 8
                        }
                    }
                ]
            }
        ],
        "reviewCarsById": []
    },
    "carFeatureList": {
        "carId": 5,
        "isConditioner": true,
        "isAllWheelDrive": true,
        "isLeatherSeats": true,
        "isChildSeats": false,
        "isHeatedSeats": true,
        "isCooledSeats": true,
        "isGps": true,
        "isSkiRack": true,
        "isAudioInput": true,
        "isUsbInput": true,
        "isBluetooth": true,
        "isAndroidAuto": true,
        "isAppleCarplay": true,
        "isSunRoof": true,
        "carByCarId": {
            "id": 5,
            "vin": "WBA4J3C59JBG91042",
            "licensePlate": "5628MP-1",
            "make": "BMW",
            "model": "4 Serie Gran Coupe",
            "manufacturedYear": "2018-05-19T21:00:00.000+00:00",
            "transmissionType": "Автоматическая",
            "fuelType": "Бензин",
            "doors": 4,
            "seats": 5,
            "carType": "Лифтбек",
            "color": "Синий",
            "advertisementsById": [
                {
                    "id": 3,
                    "userId": 1,
                    "location": "Брест",
                    "latitude": 52.096,
                    "longitude": 23.6827,
                    "publicationDate": "2022-12-07T20:43:03.000+00:00",
                    "verified": true,
                    "carId": 5,
                    "pricePerDay": 100,
                    "pricePerWeek": 500,
                    "pricePerMonth": 1200,
                    "ridesById": [
                        {
                            "id": 8,
                            "advertisementId": 3,
                            "lessorId": 6,
                            "dateStart": "2022-12-13T22:56:05.000+00:00",
                            "dateEnd": "1970-01-01T00:00:00.000+00:00",
                            "dateSignedLessor": "2022-12-15T13:40:05.000+00:00",
                            "dateSignedLessee": "1970-01-01T00:00:00.000+00:00",
                            "chatLink": "",
                            "paymentLink": "",
                            "totalCost": 0,
                            "supertypeEntityById": {
                                "id": 8
                            }
                        }
                    ]
                }
            ],
            "reviewCarsById": []
        }
    },
    "photoPaths": [
        "4dfa4109-5770-4119-901e-641130cb54d6.jpg",
        "3bf7d086-cc9b-4223-b"
    ]
}


