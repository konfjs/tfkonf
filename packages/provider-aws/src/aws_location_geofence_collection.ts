import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLocationGeofenceCollectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsLocationGeofenceCollectionArgs {
  collection_name: string;
  description?: string;
  kms_key_id?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsLocationGeofenceCollectionArgsTimeouts;
}
export class aws_location_geofence_collection extends TerraformResource {
  readonly collection_arn!: string;
  readonly create_time!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLocationGeofenceCollectionArgs) {
    super(config, "resource", args, resourceName, "aws_location_geofence_collection");
  }
}