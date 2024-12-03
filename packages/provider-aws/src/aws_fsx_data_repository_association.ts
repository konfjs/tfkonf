import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsFsxDataRepositoryAssociationArgsS3AutoExportPolicy {}
export interface AwsFsxDataRepositoryAssociationArgsS3AutoImportPolicy {}
export interface AwsFsxDataRepositoryAssociationArgsS3 {
  auto_export_policy: AwsFsxDataRepositoryAssociationArgsS3AutoExportPolicy;
  auto_import_policy: AwsFsxDataRepositoryAssociationArgsS3AutoImportPolicy;
}
export interface AwsFsxDataRepositoryAssociationArgsTimeouts {
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
  s3: AwsFsxDataRepositoryAssociationArgsS3;
  timeouts?: AwsFsxDataRepositoryAssociationArgsTimeouts;
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