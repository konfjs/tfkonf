import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeHealthCheckArgsGrpcHealthCheck {
  grpc_service_name?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
}

export interface GoogleComputeHealthCheckArgsHttp2HealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}

export interface GoogleComputeHealthCheckArgsHttpHealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}

export interface GoogleComputeHealthCheckArgsHttpsHealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}

export interface GoogleComputeHealthCheckArgsLogConfig {
  enable?: boolean;
}

export interface GoogleComputeHealthCheckArgsSslHealthCheck {
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request?: string;
  response?: string;
}

export interface GoogleComputeHealthCheckArgsTcpHealthCheck {
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request?: string;
  response?: string;
}

export interface GoogleComputeHealthCheckArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeHealthCheckArgs {
  check_interval_sec?: number;
  description?: string;
  healthy_threshold?: number;
  name: string;
  source_regions?: string[];
  timeout_sec?: number;
  unhealthy_threshold?: number;
  grpc_health_check: GoogleComputeHealthCheckArgsGrpcHealthCheck;
  http2_health_check: GoogleComputeHealthCheckArgsHttp2HealthCheck;
  http_health_check: GoogleComputeHealthCheckArgsHttpHealthCheck;
  https_health_check: GoogleComputeHealthCheckArgsHttpsHealthCheck;
  log_config: GoogleComputeHealthCheckArgsLogConfig;
  ssl_health_check: GoogleComputeHealthCheckArgsSslHealthCheck;
  tcp_health_check: GoogleComputeHealthCheckArgsTcpHealthCheck;
  timeouts?: GoogleComputeHealthCheckArgsTimeouts;
}

export class google_compute_health_check extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly type!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeHealthCheckArgs) {
    super(config, "resource", args, resourceName, "google_compute_health_check");
  }
}
