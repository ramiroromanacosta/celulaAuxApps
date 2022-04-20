var invoiceHeadersColumns=["Identificador_de_cabecera_de_factura","Enlace_de_imagen_de_factura","Errores_de_importacion","Identificador_de_factura","Identificador_de_proceso_de_carga","Unidad_de_negocio","Origen","Juego_de_importacion","Numero_de_factura","Importe_de_factura","Fecha_de_factura","Proveedor","Numero_de_proveedor","Sitio_de_proveedor","Moneda_de_factura","Descripcion","Tipo","Numero_de_registro_fiscal","Codigo_de_registro_de_cliente","Nombre_de_entidad_juridica","Condiciones_de_pago","Fecha_de_condiciones_de_pago","Recepción_de_mercancia","Recepcion_de_factura","Fecha_contable","Fecha_de_presupuesto","Adelanto_incluido_en_factura","Numero_de_adelanto","Linea_de_adelanto","Importe_de_aplicacion_de_adelanto","Fecha_contable_de_adelanto","Metodo_de_pago","Grupo_de_pago","Pago_independiente","Clase_de_tipo_de_cambio","Fecha_de_cambio","Tipo_de_cambio","Importe_para_descuento","Distribucion_de_pasivo","Categoria_de_documento","Numero_de_comprobante","Numero_de_registro_fiscal_de_primera_parte","Identificador_de_registro_fiscal_de_primera_parte","Numero_de_registro_fiscal_de_proveedor","Identificador_de_registro_fiscal_de_proveedor","Nombre_de_solicitante","Apellidos_de_solicitante","Numero_de_empleado_solicitante","Canal_de_entrega","Responsable_de_cargo_bancario","Prioridad_de_liquidación","Identificador_unico_de_remesa","Digito_de_control_de_identificador_unico_de_remesa","Motivo_de_pago","Comentarios_de_motivo_de_pago","Mensaje_de_remesa_1","Mensaje_de_remesa_2","Mensaje_de_remesa_3","Pais_de_tributación","Subtipo_de_documento","Numero_de_secuencia_interna","Numero_de_factura_de_impuestos_de_proveedor","Fecha_de_registro_interna","Fecha_de_factura_de_impuestos_de_proveedor","Tipo_de_cambio_de_factura_de_impuestos_de_proveedor","Codigo_de_ubicación_de_aduana","Ano_de_correccion","Período_de_correccion","Importe_de_control_de_impuestos","Calcular_impuestos_durante_importacion","Agregar_impuestos_al_importe_de_factura","Sin_importe_contabilizado_de_tipo_de_cambio","Moneda_de_pago","Valor_de_contexto","Atributo_1","Atributo_2","Atributo_3","Atributo_4","Atributo_5","Atributo_6","Atributo_7","Atributo_8","Atributo_9","Atributo_10","Atributo_11","Atributo_12","Atributo_13","Atributo_14","Atributo_15","Categoria_de_atributo_global","Atributo_global_1","Atributo_global_2","Atributo_global_3","Atributo_global_4","Atributo_global_5","Atributo_global_6","Atributo_global_7","Atributo_global_8","Atributo_global_9","Atributo_global_10","Atributo_global_11","Atributo_global_12","Atributo_global_13","Atributo_global_14","Atributo_global_15","Atributo_global_16","Atributo_global_17","Atributo_global_18","Atributo_global_19","Atributo_global_20","Fecha_de_atributo_global_1","Fecha_de_atributo_global_2","Fecha_de_atributo_global_3","Fecha_de_atributo_global_4","Fecha_de_atributo_global_5","Número_de_atributo_global_1","Número_de_atributo_global_2","Número_de_atributo_global_3","Número_de_atributo_global_4","Número_de_atributo_global_5","ID_de_condiciones_de_pago","ID_de_distribución_de_pasivos","Factura_relacionada_con_impuesto","Número_de_cuenta_bancaria_de_pago","Proveedor_de_pago","Numero_de_proveedor_de_pago","Nombre_de_dirección_de_pago","Identificador_de_grupo_de_retencion_de_impuestos","ID_de_solicitante","Identificador_de_aplicación","Identificador_de_entidad_jurídica","Tabla_de_productos","Clave_de_referencia_1","Clave_de_referencia_2","Clave_de_referencia_3","Clave_de_referencia_4","Clave_de_referencia_5","Anexo_de_URL","IBAN_de_proveedor","Direccion_de_correo_electrónico_de_solicitante","Identificador_de_solicitud","Fecha_de_creacion","LastUpdateDate","Clave"],invoiceLinesColumns=["Identificador_de_cabecera_de_factura","Errores_de_importacion","Identificador_de_factura","Identificador_de_proceso_de_carga","Linea","Tipo_de_linea","Importe","Cantidad_facturada","Precio_unitario","Unidad_de_medida","Descripcion","Orden_de_compra","Numero_de_linea_de_orden_de_compra","Programa_de_orden_de_compra","Numero_de_distribucion_de_orden_de_compra","Descripcion_de_item","Categoria_de_compra","Recepcion","Linea_de_recepcion","Aviso_de_consumo","Numero_de_línea_de_aviso_de_consumo","Costo_en_destino_activado","Confrontacion_final","Juego_de_distribuciones","Combinacion_de_distribucion","Fecha_contable","Fecha_de_presupuesto","Segmento_de_cuenta_de_superposicion","Segmento_de_balance_principal_de_superposicion","Segmento_de_centro_de_costos_de_superposicion","Combinacion_de_distribucion_de_superposicion","Clasificacion_de_impuestos","Ubicacion_de_envio","Codigo_de_regimen_fiscal","Nombre_de_impuesto","Codigo_de_jurisdiccion_fiscal","Codigo_de_estado_fiscal","Codigo_de_tipo_impositivo","Tipo_impositivo","Grupo_de_retencion_de_impuestos","Tipo_de_impuesto_sobre_los_ingresos","Region_de_impuesto_sobre_los_ingresos","Prorratear_en_todas_las_lineas_de_items","Numero_de_grupo_de_lineas","Categoria_comercial_de_transaccion","Clasificacion_fiscal_de_producto","Finalidad","Clasificacion_fiscal_definida_por_el_usuario","Tipo_de_producto","Valor_evaluable","Categoría_de_producto","Importe_de_control_de_impuestos","Cantidad_estadistica","Seguimiento_como_activo_fijo","Libro","Categoría_de_activo","Numero_de_serie","Fabricante","Modelo","Factura_de_correccion_de_precio","Linea_de_factura_sujeta_a_correccion_de_precio","Correccion_de_precio","Opcion_de_confrontacion","Opcion_de_contabilidad_diferida","Imponible","Incluido_en_línea_imponible","Nombre_de_solicitante","Apellidos_de_solicitante","Número_de_empleado_solicitante","ID_de_cabecera_de_orden_de_compra","ID_de_linea_de_orden_de_compra","ID_de_ubicacion_de_línea_de_orden_de_compra","ID_de_distribucion_de_ordenes_de_compra","Identificador_de_ubicacion_de_envio","Ubicacion_de_origen_de_envio","Identificador_de_ubicación_de_origen_de_envio","Ubicacion_de_descarga_final","Identificador_de_ubicacion_de_descarga_final","ID_de_articulo","Identificador_de_categoria_de_compra","Valor_de_contexto","Atributo_1","Atributo_2","Atributo_3","Atributo_4","Atributo_5","Atributo_6","Atributo_7","Atributo_8","Atributo_9","Atributo_10","Atributo_11","Atributo_12","Atributo_13","Atributo_14","Atributo_15","Categoria_de_atributo_global","Atributo_global_1","Atributo_global_2","Atributo_global_3","Atributo_global_4","Atributo_global_5","Atributo_global_6","Atributo_global_7","Atributo_global_8","Atributo_global_9","Atributo_global_10","Atributo_global_11","Atributo_global_12","Atributo_global_13","Atributo_global_14","Atributo_global_15","Atributo_global_16","Atributo_global_17","Atributo_global_18","Atributo_global_19","Atributo_global_20","ID_de_combinacion_de_distribucion","Identificador_de_juego_de_distribuciones","Identificador_de_tipo_impositivo","Identificador_de_grupo_de_retencion_de_impuestos","ID_de_solicitante","Identificador_de_aplicacion","Tabla_de_productos","Clave_de_referencia_1","Clave_de_referencia_2","Clave_de_referencia_3","Clave_de_referencia_4","Clave_de_referencia_5","Informacion_de_proyecto","Facturable","Capitalizable","ID_de_tipo_de_trabajo_de_proyecto","ID_de_contrato_de_proyecto","ID_de_linea_de_contrato_de_proyecto","ID_de_asignacion_de_fondos_de_proyecto","Tipo_de_cargo_fiscal","Fecha_de_inicio_de_contabilidad_de_varios_periodos","Fecha_de_finalización_de_contabilidad_de_varios_períodos","Cuenta_de_devengo_de_contabilidad_de_varios_periodos","Número_de_articulo_de_proveedor","Dirección_de_correo_electronico_de_solicitante","ID_de_linea_de_factura","CreationDate","LastUpdateDate","Clave"],invoiceHeadersMinColumns=["Identificador_de_cabecera_de_factura","Enlace_de_imagen_de_factura","Errores_de_importacion","Identificador_de_factura","Identificador_de_proceso_de_carga","Unidad_de_negocio","Origen","Numero_de_factura","Importe_de_factura","Fecha_de_factura","Proveedor","Numero_de_proveedor","Sitio_de_proveedor","Moneda_de_factura","Descripcion","Tipo","Condiciones_de_pago","Fecha_de_condiciones_de_pago","Fecha_contable","Clase_de_tipo_de_cambio","Tipo_de_cambio","Fecha_de_cambio","Calcular_impuestos_durante_importacion","Agregar_impuestos_al_importe_de_factura","Moneda_de_pago","Atributo_2","Atributo_3","Atributo_4","Atributo_global_1","Clave_de_referencia_3","Identificador_de_solicitud","Fecha_de_creacion","LastUpdateDate","Clave"],invoiceLinesMinColumns=["Identificador_de_cabecera_de_factura","Errores_de_importacion","Identificador_de_factura","Identificador_de_proceso_de_carga","Linea","Tipo_de_linea","Importe","Cantidad_facturada","Precio_unitario","Unidad_de_medida","Descripcion","Orden_de_compra","Combinacion_de_distribucion","Fecha_contable","Combinacion_de_distribucion_de_superposicion","Clasificacion_de_impuestos","ID_de_linea_de_factura","CreationDate","LastUpdateDate","Clave"];