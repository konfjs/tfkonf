import { TerraformConfig, TerraformResource } from "tfs";
export interface AutoExportPolicy {}
export interface AutoImportPolicy {}
export interface S3 {
  auto_export_policy: AutoExportPolicy;
  auto_import_policy: AutoImportPolicy;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFsxDataRepositoryAssociationArgs {
  batch_import_meta_data_on_create?: boolean;
  data_repository_path: string;
  delete_data_in_filesystem?: boolean;
  file_system_id: string;
  file_system_path: string;
  tags?: {
    [key: string]: string;
  };
  s3: S3;
  timeouts: Timeouts;
}
export class aws_fsx_data_repository_association extends TerraformResource {
  readonly arn!: string;
  readonly association_id!: string;
  readonly id?: string;
  readonly imported_file_chunk_size?: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsFsxDataRepositoryAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_fsx_data_repository_association");
  }
}