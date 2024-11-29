import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudRunV2JobArgsBinaryAuthorization {
  breakglass_justification?: string;
  policy?: string;
  use_default?: boolean;
}
export interface GoogleCloudRunV2JobArgstemplatetemplatecontainersenvValueSourceSecretKeyRef {
  secret: string;
  version: string;
}
export interface GoogleCloudRunV2JobArgstemplatetemplatecontainersenvValueSource {
  secret_key_ref: GoogleCloudRunV2JobArgstemplatetemplatecontainersenvValueSourceSecretKeyRef;
}
export interface GoogleCloudRunV2JobArgstemplatetemplatecontainersenv {
  name: string;
  value?: string;
  value_source: GoogleCloudRunV2JobArgstemplatetemplatecontainersenvValueSource;
}
export interface GoogleCloudRunV2JobArgstemplatetemplatecontainersports {
  container_port?: number;
  name?: string;
}
export interface GoogleCloudRunV2JobArgstemplatetemplatecontainersresources {}
export interface GoogleCloudRunV2JobArgstemplatetemplatecontainersVolumeMounts {
  mount_path: string;
  name: string;
}
export interface GoogleCloudRunV2JobArgstemplatetemplatecontainers {
  args?: string[];
  command?: string[];
  image: string;
  name?: string;
  working_dir?: string;
  env: GoogleCloudRunV2JobArgstemplatetemplatecontainersenv;
  ports: GoogleCloudRunV2JobArgstemplatetemplatecontainersports;
  resources: GoogleCloudRunV2JobArgstemplatetemplatecontainersresources;
  volume_mounts: GoogleCloudRunV2JobArgstemplatetemplatecontainersVolumeMounts;
}
export interface GoogleCloudRunV2JobArgstemplatetemplatevolumesCloudSqlInstance {
  instances?: string[];
}
export interface GoogleCloudRunV2JobArgstemplatetemplatevolumesEmptyDir {
  medium?: string;
  size_limit?: string;
}
export interface GoogleCloudRunV2JobArgstemplatetemplatevolumesgcs {
  bucket: string;
  read_only?: boolean;
}
export interface GoogleCloudRunV2JobArgstemplatetemplatevolumesnfs {
  path?: string;
  read_only?: boolean;
  server: string;
}
export interface GoogleCloudRunV2JobArgstemplatetemplatevolumessecretitems {
  mode?: number;
  path: string;
  version: string;
}
export interface GoogleCloudRunV2JobArgstemplatetemplatevolumessecret {
  default_mode?: number;
  secret: string;
  items: GoogleCloudRunV2JobArgstemplatetemplatevolumessecretitems;
}
export interface GoogleCloudRunV2JobArgstemplatetemplatevolumes {
  name: string;
  cloud_sql_instance: GoogleCloudRunV2JobArgstemplatetemplatevolumesCloudSqlInstance;
  empty_dir: GoogleCloudRunV2JobArgstemplatetemplatevolumesEmptyDir;
  gcs: GoogleCloudRunV2JobArgstemplatetemplatevolumesgcs;
  nfs: GoogleCloudRunV2JobArgstemplatetemplatevolumesnfs;
  secret: GoogleCloudRunV2JobArgstemplatetemplatevolumessecret;
}
export interface GoogleCloudRunV2JobArgstemplatetemplateVpcAccessNetworkInterfaces {
  tags?: string[];
}
export interface GoogleCloudRunV2JobArgstemplatetemplateVpcAccess {
  connector?: string;
  network_interfaces: GoogleCloudRunV2JobArgstemplatetemplateVpcAccessNetworkInterfaces;
}
export interface GoogleCloudRunV2JobArgstemplatetemplate {
  encryption_key?: string;
  max_retries?: number;
  containers: GoogleCloudRunV2JobArgstemplatetemplatecontainers;
  volumes: GoogleCloudRunV2JobArgstemplatetemplatevolumes;
  vpc_access: GoogleCloudRunV2JobArgstemplatetemplateVpcAccess;
}
export interface GoogleCloudRunV2JobArgstemplate {
  annotations?: {
    [key: string]: string;
  };
  labels?: {
    [key: string]: string;
  };
  template: GoogleCloudRunV2JobArgstemplatetemplate;
}
export interface GoogleCloudRunV2JobArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudRunV2JobArgs {
  annotations?: {
    [key: string]: string;
  };
  client?: string;
  client_version?: string;
  deletion_protection?: boolean;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  binary_authorization: GoogleCloudRunV2JobArgsBinaryAuthorization;
  template: GoogleCloudRunV2JobArgstemplate;
  timeouts: GoogleCloudRunV2JobArgstimeouts;
}
export class google_cloud_run_v2_job extends TerraformResource {
  readonly conditions!: any[];
  readonly create_time!: string;
  readonly creator!: string;
  readonly delete_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly execution_count!: number;
  readonly expire_time!: string;
  readonly generation!: string;
  readonly id?: string;
  readonly last_modifier!: string;
  readonly latest_created_execution!: any[];
  readonly launch_stage?: string;
  readonly observed_generation!: string;
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly terminal_condition!: any[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunV2JobArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_v2_job");
  }
}